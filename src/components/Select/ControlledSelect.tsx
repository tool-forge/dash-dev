'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';

interface ControlledSelectProps {
  name: string;
  label: string;
  items: {
    value: string;
    label: string;
  }[];
  description?: string;
  placeholder?: string;
}

export const ControlledSelect = ({
  name,
  label,
  description,
  placeholder,
  items,
}: ControlledSelectProps) => {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
