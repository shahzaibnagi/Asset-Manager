import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  condition: z.string({
    required_error: "Please select a condition.",
  }),
  date: z.date({
    required_error: "A date is required.",
  }),
  timePref: z.string({
    required_error: "Please select a preferred time.",
  }),
});

export function AppointmentForm() {
  const { t } = useLanguage();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
    },
  });

  function generateMessage(values: z.infer<typeof formSchema>) {
    return `Hello! I would like to book an appointment.%0A%0A*Name:* ${values.fullName}%0A*Phone:* ${values.phone}%0A*Condition:* ${values.condition}%0A*Preferred Date:* ${format(values.date, "PPP")}%0A*Preferred Time:* ${values.timePref}%0A${values.email ? `*Email:* ${values.email}` : ''}`;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = generateMessage(values);
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  }

  function handleEmailFallback() {
    const values = form.getValues();
    // basic validation check before email
    if (!values.fullName || !values.phone) {
      form.trigger(["fullName", "phone"]);
      return;
    }
    const message = `Hello! I would like to book an appointment.\n\nName: ${values.fullName}\nPhone: ${values.phone}\nCondition: ${values.condition || 'Not specified'}\nPreferred Date: ${values.date ? format(values.date, "PPP") : 'Not specified'}\nPreferred Time: ${values.timePref || 'Not specified'}\n${values.email ? `Email: ${values.email}` : ''}`;
    
    window.location.href = `mailto:appointments@drayeshaphysio.com?subject=New Appointment Request&body=${encodeURIComponent(message)}`;
  }

  return (
    <section className="py-24 relative overflow-hidden" id="booking-form">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            {t("booking.title")}
          </motion.h2>
          <p className="text-muted-foreground">
            Take the first step towards recovery. Fill out the form below and our team will confirm your appointment shortly.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("booking.name")} *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("booking.phone")} *</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (234) 567-8900" className="bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("booking.email")} (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="condition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("booking.condition")} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select a condition" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Back/Neck Pain">Back/Neck Pain</SelectItem>
                          <SelectItem value="Sports Injury">Sports Injury</SelectItem>
                          <SelectItem value="Post-Surgery">Post-Surgery</SelectItem>
                          <SelectItem value="Joint Pain">Joint Pain</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col pt-2">
                      <FormLabel className="text-foreground mb-1">{t("booking.date")} *</FormLabel>
                      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal bg-background/50",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setIsCalendarOpen(false);
                            }}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timePref"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("booking.time")} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select time preference" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col items-center gap-4 pt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12 py-6 rounded-full text-base shadow-lg shadow-emerald-500/25 bg-emerald-500 hover:bg-emerald-600 text-white hover:-translate-y-1 transition-all" data-testid="button-submit-booking">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t("booking.submit")}
                </Button>
                <button 
                  type="button" 
                  onClick={handleEmailFallback}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  data-testid="button-email-fallback"
                >
                  <Mail className="w-4 h-4" />
                  {t("booking.email_fallback")}
                </button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
