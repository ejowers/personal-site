import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowSquareOutIcon,
  CalendarBlankIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react";
import React from "react";

const ContactPage = () => {
  return (
    <section id="contact" className="px-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Let&apos;s Work Together
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                <EnvelopeIcon className="w-6 h-6 mr-3 text-primary" />
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input placeholder="Subject" className="w-full" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Calendly Scheduling */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                <CalendarBlankIcon className="w-6 h-6 mr-3 text-primary" />
                Schedule a Call
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Ready to discuss your next project or explore collaboration
                  opportunities? Book a 30-minute call to chat about how we can
                  work together.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    30-minute consultation call
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Project planning & strategy
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Technical architecture discussion
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-6">
                  <ArrowSquareOutIcon className="w-4 h-4 mr-2" />
                  Book on Calendly
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
