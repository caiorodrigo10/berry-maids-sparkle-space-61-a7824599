
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface StepNavigationProps {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
  isLoading?: boolean;
}

const StepNavigation = ({ step, prevStep, nextStep, isLoading = false }: StepNavigationProps) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (step === 1) {
      navigate('/');
    } else {
      prevStep();
    }
  };

  return (
    <>
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePrevClick}
          disabled={isLoading}
          className="w-[140px] h-[48px] text-base font-semibold uppercase"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        {step !== 7 && (
          <Button
            onClick={nextStep}
            disabled={isLoading}
            className="w-[140px] h-[48px] text-base font-semibold uppercase gap-2 bg-berry-purple hover:bg-berry-purple/90 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Next <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <span className="text-sm text-gray-500 uppercase">
          Step {step} of 7
        </span>
      </div>
    </>
  );
};

export default StepNavigation;
