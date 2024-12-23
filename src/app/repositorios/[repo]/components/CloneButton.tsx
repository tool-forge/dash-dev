'use client';

import { useEffect, useState } from 'react';

import { toast } from 'sonner';
import { Check, Copy } from 'lucide-react';

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';

interface CloneButtonProps {
  url: string;
}

export const CloneButton = ({ url }: CloneButtonProps) => {
  const [hasClicked, setHasClicked] = useState(false);
  const handleCopy = () => {
    toast.info('URL de clone copiada');
    navigator.clipboard.writeText(url);
    setHasClicked(true);
  };

  useEffect(() => {
    if (hasClicked) {
      setTimeout(() => {
        setHasClicked(false);
      }, 1000);
    }
  }, [hasClicked]);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Button onClick={handleCopy} variant="link">
            {hasClicked ? (
              <Check className="w-4 h-4 text-green-700" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copiar URL de clone</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
