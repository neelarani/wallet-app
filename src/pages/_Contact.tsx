import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  description: z
    .string()
    .min(10, { message: "Describe your message (min 10 characters)." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast.warning(
      `Hello ${data.name}! This features is not available for now!`
    );
  };

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="rounded-2xl shadow">
          <CardHeader className="px-6 py-6">
            <CardTitle className="text-2xl">
              Contact <span className="text-primary">Neela</span>
            </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Have questions or need help? Send us a message and we'll respond
              ASAP.
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
                  {...register("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-sm text-destructive">
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
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p role="alert" className="mt-1 text-sm text-destructive">
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
                  placeholder="Tell us what's happening, include relevant details..."
                  rows={5}
                  {...register("description")}
                  aria-invalid={!!errors.description}
                />
                {errors.description && (
                  <p role="alert" className="mt-1 text-sm text-destructive">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
