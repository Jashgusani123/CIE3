import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

// Define the type for each service
interface Service {
  image: string;
  title: string;
  description: string;
}

// Define the props type for the component
interface ServiceShowProps {
  services: Service[];
}

const ServiceShow: React.FC<ServiceShowProps> = ({ services }) => {
  return (
    <section
      style={{
        backgroundColor: "#85b5f5",
        padding: "20px", // Adjusted padding for responsiveness
      }}
      id="services"
>
      {/* Heading Section */}
      <section className="py-8 px-2 text-center text-black">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-2">
          Comprehensive solutions tailored to your needs
        </p>
      </section>

      {/* Services Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-8 lg:px-12">
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)",
              },
            }}
            className="shadow-2xl"
          >
            {/* Service Image */}
            <CardMedia
              component="img"
              height="140"
              image={service.image}
              alt={service.title}
            />
            {/* Service Content */}
            <CardContent>
              <Typography variant="h6" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
            {/* Like Button */}
            <CardActions>
              <Button variant="contained" color="primary">
                Like
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceShow;
