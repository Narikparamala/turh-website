"use client";

import { useActionState, useOptimistic } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Bot, Sparkles, ServerCrash } from 'lucide-react';
import { getDiagnostic } from '@/lib/actions';
import { useEffect, useRef } from 'react';

const initialState = {
  data: null,
  error: null,
};

function SubmitButton() {
  // `useActionState` doesn't have a `pending` state, so we can't use `useFormStatus`
  // We'll manage a simple pending state manually.
  return (
    <Button type="submit" className="w-full sm:w-auto" variant="destructive">
      <Lightbulb className="mr-2 h-4 w-4" />
      Get Advice
    </Button>
  );
}

export default function AiDiagnosticSection() {
  const [state, formAction, isPending] = useActionState(getDiagnostic, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isPending && (state.data || state.error)) {
      formRef.current?.reset();
    }
  }, [isPending, state.data, state.error]);

  return (
    <section id="ai-diagnostics" className="py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">AI-Powered Diagnostics</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Device on the fritz? Describe the issue and get instant troubleshooting advice from our AI assistant before you book a repair.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
            <Card className="md:col-span-2">
                <form action={formAction} ref={formRef}>
                    <CardHeader>
                        <CardTitle>Problem Description</CardTitle>
                        <CardDescription>
                            Tell us what's wrong. Be specific for best results. E.g., "My Samsung TV won't turn on and the red light is blinking."
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Textarea
                            name="problemDescription"
                            placeholder="Describe the issue with your device..."
                            rows={6}
                            required
                        />
                        {state.error && !state.data && (
                           <p className="text-sm font-medium text-destructive mt-2">{state.error}</p>
                        )}
                    </CardContent>
                    <CardFooter>
                         <Button type="submit" disabled={isPending} className="w-full sm:w-auto" variant="destructive">
                            {isPending ? (
                                <>
                                <Bot className="mr-2 h-4 w-4 animate-spin" />
                                Diagnosing...
                                </>
                            ) : (
                                <>
                                <Lightbulb className="mr-2 h-4 w-4" />
                                Get Advice
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            <div className="md:col-span-3">
                <Card className="min-h-full flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="h-6 w-6 text-primary" />
                            Potential Solutions
                        </CardTitle>
                        <CardDescription>Our AI will suggest steps you can try to fix the problem yourself.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        {isPending && !state.data && (
                             <div className="flex flex-col items-center justify-center text-center text-muted-foreground p-8 rounded-lg border-2 border-dashed h-full">
                                <Bot className="h-12 w-12 mb-4 animate-pulse"/>
                                <p>Diagnosing your issue...</p>
                            </div>
                        )}

                        {!isPending && state.data && (
                             <div className="text-sm text-foreground whitespace-pre-wrap bg-background p-4 rounded-md border">{state.data}</div>
                        )}
                        
                        {!isPending && state.error && (
                            <div className="flex flex-col items-center justify-center text-center text-destructive p-8 rounded-lg border-2 border-dashed border-destructive/50 h-full bg-destructive/5">
                                <ServerCrash className="h-12 w-12 mb-4"/>
                                <h3 className="font-semibold mb-2">An Error Occurred</h3>
                                <p className="text-sm">{state.error}</p>
                            </div>
                        )}
                        
                        {!isPending && !state.data && !state.error && (
                            <div className="flex flex-col items-center justify-center text-center text-muted-foreground p-8 rounded-lg border-2 border-dashed h-full">
                                <Bot className="h-12 w-12 mb-4"/>
                                <p>Your diagnostic results will appear here.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </section>
  );
}