
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

interface ContactInfoStepProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
}

const ContactInfoStep = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  isValid,
  setIsValid
}: ContactInfoStepProps) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    validateFields();
  }, [name, email, phone]);

  const validateFields = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: ""
    };
    
    let valid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (phone.trim().length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    setIsValid(valid);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Contact Information</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;
