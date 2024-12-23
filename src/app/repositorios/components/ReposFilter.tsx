'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ControlledInput,
  ControlledSelect,
  Form,
} from '@/components';
import { useSearchParams } from 'next/navigation';

interface ReposFilterProps {
  languages: { label: string; value: string }[];
}

const schema = z.object({
  text: z.string().optional(),
  language: z.string().optional(),
});

export const ReposFilter = ({ languages }: ReposFilterProps) => {
  const searchParams = useSearchParams();

  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      text: searchParams.get('text') || undefined,
      language: searchParams.get('language') || undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    const params = new URLSearchParams(window.location.search);

    if (data.text) {
      params.set('text', data.text);
    } else {
      params.delete('text');
    }

    if (data.language) {
      params.set('language', data.language);
    } else {
      params.delete('language');
    }

    window.location.search = params.toString();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Repositórios</CardTitle>
        <CardDescription>
          Encontre repositórios de acordo com o nome ou a linguagem.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...methods}>
          <form
            className="flex gap-4 items-end"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="flex flex-1 gap-4">
              <ControlledInput name="text" label="Search" />
              <ControlledSelect
                name="language"
                label="Language"
                placeholder="Select language"
                items={languages}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
