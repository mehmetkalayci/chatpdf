"use client";
import React from "react";
import axios from "axios";
import { Button } from "./ui/button";

type Props = { isPro: boolean };

function SubscriptionButton({ isPro }: Props) {
  const [loading, setLoading] = React.useState(false);
  const handleSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button disabled={loading} onClick={handleSubscription}>
      {isPro ? "Manage Subscription" : "Get Pro"}
    </Button>
  );
}

export default SubscriptionButton;
