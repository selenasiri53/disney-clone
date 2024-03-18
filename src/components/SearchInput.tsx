"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";

import { z } from "zod"

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "./ui/input";

// define form schema using zod index- validates info sent through form
const formSchema = z.object({
    input: z.string().min(2).max(50),
})

// formSchema goes outside
// inside SearchInput function: define form schema (rules) -- input must be 2-50 chars
// zod will validate the data, making it easier to find errors
export default function SearchInput() { // redirects the user after search
    const router = useRouter();

    //1. define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "", // matches our schema
        }
    })

    //2. onsubmit handler -- validated so it's in the correct format
    function onSubmit(values: z.infer<typeof formSchema>) {
        //Do something with the form values
        // This will be type-safe and validated
        console.log(values);

        router.push(`/search/${values.input}`);
    }

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name='input'
                        render={({ field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Search..." {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
          )
}

// form docs: https://ui.shadcn.com/docs/components/form