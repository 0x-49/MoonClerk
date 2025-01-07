import React from 'react';
import { CreditCard } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <CreditCard className="w-8 h-8 text-primary" />
    </div>
  );
};

export default Logo;
