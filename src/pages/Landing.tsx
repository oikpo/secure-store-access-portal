
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Product Registry System
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A seamless way to manage your inventory and product catalog with MySQL integration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your complete product management solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-primary mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">User Management</h3>
                <p className="text-gray-600 text-center">
                  Secure login and registration system with role-based access control
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-primary mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Product Registry</h3>
                <p className="text-gray-600 text-center">
                  Easily add, edit and track all your products in one place
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-primary mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Inventory Analytics</h3>
                <p className="text-gray-600 text-center">
                  Get insights into your inventory with detailed analytics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our System?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies and designed for ease of use
            </p>
          </div>
          
          <div className="grid gap-6">
            {[
              "Seamless MySQL integration with XAMPP",
              "Responsive design that works on all devices",
              "Secure authentication system",
              "Easy product management interface",
              "Real-time inventory updates",
              "Detailed product categorization"
            ].map((feature, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="text-green-500 h-5 w-5 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/signup">
              <Button size="lg">Start Using Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Product Registry System</h2>
            <p className="text-gray-400 mb-6">
              A complete solution for your product management needs
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/signup" className="text-gray-300 hover:text-white transition-colors">
                Sign Up
              </Link>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Product Registry System. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
