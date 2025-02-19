
import React, { useState } from 'react';
import { toast } from "sonner";
import LocationStep from './estimator/LocationStep';
import HouseSizeStep from './estimator/HouseSizeStep';
import RoomsStep from './estimator/RoomsStep';
import CleanlinessStep from './estimator/CleanlinessStep';
import ExtrasStep from './estimator/ExtrasStep';
import ContactInfoStep from './estimator/ContactInfoStep';
import PriceDisplay from './estimator/PriceDisplay';
import StepNavigation from './estimator/StepNavigation';

const PriceEstimator = () => {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [size, setSize] = useState([400]);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [cleanLevel, setCleanLevel] = useState(3);
  const [extras, setExtras] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('price-estimator');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const calculatePrice = () => {
    let basePrice = 0;
    const sqft = size[0];

    if (sqft <= 2000) {
      basePrice = sqft * 0.1;
    } else if (sqft <= 3000) {
      basePrice = sqft * 0.045;
    } else if (sqft <= 4000) {
      basePrice = sqft * 0.033;
    } else if (sqft <= 5000) {
      basePrice = sqft * 0.03175;
    } else {
      basePrice = sqft * 0.0366;
    }

    basePrice += bedrooms * 35;
    basePrice += bathrooms * 20;

    return basePrice.toFixed(2);
  };

  const validateFields = () => {
    if (!zipCode || zipCode.length !== 5) {
      toast.error("Please enter a valid ZIP code");
      return false;
    }
    if (!name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!phone.trim() || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  const sendWebhookData = async () => {
    const calculatedPrice = calculatePrice();
    const formData = {
      house_size: `${size[0]} sq ft`,
      zip_code: zipCode,
      bedrooms: bedrooms.toString(),
      bathrooms: bathrooms.toString(),
      cleanliness_level: cleanLevel.toString(),
      additional_services: extras.join(", "),
      name: name,
      email: email,
      phone: phone,
      estimated_price: `$${calculatedPrice}`
    };

    try {
      setIsLoading(true);
      const response = await fetch('https://services.leadconnectorhq.com/hooks/JY9ENR4Wt2w5E1Fjx2ix/webhook-trigger/ee2ac8e5-5578-4a00-a0fa-f57589dcbded', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      toast.success("Information submitted successfully!");
      setStep(step + 1);
    } catch (error) {
      console.error('Error sending data:', error);
      toast.error("Failed to submit information. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 6) {
      if (validateFields()) {
        sendWebhookData();
      }
    } else if (step < 7) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <LocationStep zipCode={zipCode} setZipCode={setZipCode} />;
      case 2:
        return <HouseSizeStep size={size} setSize={setSize} />;
      case 3:
        return (
          <RoomsStep
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
          />
        );
      case 4:
        return <CleanlinessStep cleanLevel={cleanLevel} setCleanLevel={setCleanLevel} />;
      case 5:
        return <ExtrasStep extras={extras} setExtras={setExtras} />;
      case 6:
        return (
          <ContactInfoStep
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        );
      case 7:
        return (
          <PriceDisplay
            price={calculatePrice()}
            size={size}
            setSize={setSize}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
            cleanLevel={cleanLevel}
            setCleanLevel={setCleanLevel}
            extras={extras}
            setExtras={setExtras}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section id="price-estimator" className={`py-32 px-0.25 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple font-bauhaus">
          Calculate Your Price
        </h2>
        
        <div className="max-w-3xl mx-auto px-0.25">
          {renderStep()}
          <StepNavigation
            step={step}
            prevStep={prevStep}
            nextStep={nextStep}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
