import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { generateBrochure } from "@/lib/generateBrochure";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Inquiry Sent",
        description: "Thank you! We will get back to you shortly."
      });
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
          Interested?
        </p>
        <h2 className="mb-4 font-display text-4xl font-medium text-foreground">
          Contact Us
        </h2>
        <div className="mx-auto mb-10 h-[2px] w-16 bg-primary" />
        <p className="mx-auto mb-12 max-w-2xl font-body text-muted-foreground">
          We are ready to assist you with a viewing or detailed condition reports.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-body text-foreground">+420 775 799 901</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-body text-foreground">info@yachtprofessional.cz</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-body text-foreground">Italy</span>
          </div>
        </div>

        <button className="mb-16 bg-primary px-12 py-4 font-body text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90">
          Download Brochure
        </button>

        {/* Inquiry Form */}
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-8 font-display text-2xl font-medium text-foreground">
            Send an Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-body text-sm text-muted-foreground">
                  First Name *
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="border-border bg-background" />
                
              </div>
              <div>
                <label className="mb-1.5 block font-body text-sm text-muted-foreground">
                  Last Name *
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="border-border bg-background" />
                
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-body text-sm text-muted-foreground">
                  Phone
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+420 000 000 000"
                  className="border-border bg-background" />
                
              </div>
              <div>
                <label className="mb-1.5 block font-body text-sm text-muted-foreground">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="border-border bg-background" />
                
              </div>
            </div>
            <div>
              <label className="mb-1.5 block font-body text-sm text-muted-foreground">
                Message *
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
                className="border-border bg-background" />
              
            </div>
            <div className="pt-2 text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gap-2 bg-primary px-12 py-4 font-body text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90">
                
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>);

};

export default ContactSection;