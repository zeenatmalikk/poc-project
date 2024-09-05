// src/types/Student.ts

export type Address = {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  
  export type Student = {
    id: number;
    name: string;
    age: number;
    gender: string;
    address: Address;
    email: string;
    phone: string;
    courses: string[];
    gpa: number;
    image: string;
  };
  