import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Map, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  description: z
    .string()
    .min(10, { message: 'Describe your message (min 10 characters).' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const contactInfo = [
    { title: 'Phone', icon: Phone, value: '01938759588' },
    { title: 'Email', icon: Mail, value: 'neelarany@gmail.com' },
    { title: 'Address', icon: Map, value: 'Dhaka, Bangladesh' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', description: '' },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast.warning(`Hello ${data.name}! This feature is not available for now!`);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Wallet APP</title>
        <meta
          name="description"
          content="Get in touch with Wallet APP support. Send us a message for help, inquiries, or feedback about our digital wallet services."
        />
      </Helmet>
      <section className="my-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Contact <span className="text-primary">Neela</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Have questions or need help? Reach out to us via phone, email, or
              visit us at our office.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg border  shadow-sm hover:shadow-md transition-shadow"
                >
                  <info.icon size={28} className="text-primary" />
                  <div>
                    <p className="font-semibold">{info.title}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="rounded-2xl shadow">
              <CardHeader className="px-6 py-6">
                <CardTitle className="text-2xl font-bold">
                  Send Us a Message
                </CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form below and we will get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...register('name')}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register('email')}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="description" className="mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Write your message..."
                      rows={5}
                      {...register('description')}
                      aria-invalid={!!errors.description}
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="font-bold cursor-pointer"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
