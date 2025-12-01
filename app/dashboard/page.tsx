"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/dashboard/StatsCard";
import ShipmentsTable from "@/components/dashboard/ShipmentsTable";

interface Shipment {
  id: string;
  productName: string;
  source: string;
  destination: string;
  status: string;
  lastUpdated: string;
  estimatedDelivery: string;
  productImage: string;
  timeline: any[];
  logs: any[];
}

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
      return;
    }
    fetchShipments();
  }, [isAuthenticated, router]);

  const fetchShipments = async () => {
    try {
      setLoading(true);
      const response = await fetch("/data/shipments.json");

      if (!response.ok) {
        throw new Error("Failed to fetch shipments");
      }

      const data = await response.json();
      setShipments(data.shipments);
      setError(null);
    } catch (err) {
      setError("Failed to load shipments. Please try again later.");
      console.error("Error fetching shipments:", err);
    } finally {
      setLoading(false);
    }
  };

  const stats = {
    total: shipments.length,
    inTransit: shipments.filter((s) => s.status === "in_transit").length,
    delivered: shipments.filter((s) => s.status === "delivered").length,
    delayed: shipments.filter((s) => s.status === "delayed").length,
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-red-100 text-red-600 px-6 py-4 rounded-lg">
              <p className="font-semibold">{error}</p>
              <button
                onClick={fetchShipments}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Shipment Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Track and manage all your shipments
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Shipments"
              value={stats.total}
              icon={<Package className="w-6 h-6" />}
              color="blue"
            />
            <StatsCard
              title="In Transit"
              value={stats.inTransit}
              icon={<Truck className="w-6 h-6" />}
              color="yellow"
            />
            <StatsCard
              title="Delivered"
              value={stats.delivered}
              icon={<CheckCircle className="w-6 h-6" />}
              color="green"
            />
            <StatsCard
              title="Delayed"
              value={stats.delayed}
              icon={<Clock className="w-6 h-6" />}
              color="red"
            />
          </div>

          {/* Shipments Table */}
          <ShipmentsTable shipments={shipments} />
        </div>
      </div>
    </>
  );
}
