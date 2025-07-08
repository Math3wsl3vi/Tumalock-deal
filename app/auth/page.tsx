"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const AuthPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-poppins">
      <div className="container mx-auto flex h-screen flex-col items-center justify-center p-4">
        <div className="mb-8 flex items-center gap-2">
          <h1 className="text-3xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text uppercase font-semibold">Tumalock Deal</h1>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>
                  Secure your transactions with Tumalock
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="link"
                  className="text-blue-600"
                  onClick={() => setActiveTab("signup")}
                >
                 {" Don't"} have an account? Sign up
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Start securing your transactions today
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 7XX XXX XXX"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Sign Up"}
                      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="link"
                  className="text-blue-600"
                  onClick={() => setActiveTab("login")}
                >
                  Already have an account? Login
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="my-8 max-w-md" />

        <div className="text-center text-sm text-gray-600">
          <p 
          onClick={()=>router.push('/dashboard')}
          className="cursor-pointer">By continuing, you agree to our <span className="underline hover:text-blue-600">Terms of Service</span></p>
          <p className="cursor-pointer">and acknowledge our <span className="underline hover:text-blue-600">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;