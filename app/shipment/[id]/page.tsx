"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Package, Calendar, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";

interface TimelineItem {
  status: string;
  timestamp: string | null;
  completed: boolean;
}

interface LogEvent {
  event: string;
  timestamp: string;
}

interface Shipment {
  id: string;
  productName: string;
  source: string;
  destination: string;
  status: string;
  lastUpdated: string;
  estimatedDelivery: string;
  productImage: string;
  timeline: TimelineItem[];
  logs: LogEvent[];
}

const statusColors: Record<string, string> = {
  delivered: "bg-green-100 text-green-800",
  in_transit: "bg-yellow-100 text-yellow-800",
  delayed: "bg-red-100 text-red-800",
  ordered: "bg-blue-100 text-blue-800",
};

const statusLabels: Record<string, string> = {
  delivered: "Delivered",
  in_transit: "In Transit",
  delayed: "Delayed",
  ordered: "Ordered",
  packed: "Packed",
  dispatched: "Dispatched",
};

export default function ShipmentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap the params Promise
  const { id } = use(params);

  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
      return;
    }
    fetchShipmentDetails();
  }, [id, isAuthenticated, router]);

  const fetchShipmentDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch("/data/shipments.json");

      if (!response.ok) {
        throw new Error("Failed to fetch shipment details");
      }

      const data = await response.json();
      const foundShipment = data.shipments.find((s: Shipment) => s.id === id);

      if (!foundShipment) {
        throw new Error("Shipment not found");
      }

      setShipment(foundShipment);
      setError(null);
    } catch (err) {
      setError("Failed to load shipment details");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading shipment details...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !shipment) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-red-100 text-red-600 px-6 py-4 rounded-lg">
              <p className="font-semibold">{error || "Shipment not found"}</p>
              <button
                onClick={() => router.push("/dashboard")}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Back to Dashboard
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
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>

          {/* Shipment Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center space-x-3 mb-2">
                  <Package className="w-6 h-6 text-indigo-600" />
                  <h1 className="text-2xl font-bold text-gray-900">
                    {shipment.id}
                  </h1>
                </div>
                <p className="text-lg text-gray-700">{shipment.productName}</p>
              </div>
              <span
                className={`px-4 py-2 inline-flex text-sm font-semibold rounded-full ${
                  statusColors[shipment.status]
                }`}
              >
                {statusLabels[shipment.status]}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">From</p>
                  <p className="font-medium text-gray-900">{shipment.source}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">To</p>
                  <p className="font-medium text-gray-900">
                    {shipment.destination}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Estimated Delivery</p>
                  <p className="font-medium text-gray-900">
                    {new Date(shipment.estimatedDelivery).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Timeline */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Shipment Timeline
              </h2>
              <div className="space-y-6">
                {shipment.timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.completed
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {item.completed ? "✓" : index + 1}
                      </div>
                      {index < shipment.timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            item.completed ? "bg-indigo-600" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <p
                        className={`font-semibold ${
                          item.completed ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {statusLabels[item.status]}
                      </p>
                      {item.timestamp && (
                        <p className="text-sm text-gray-500 mt-1">
                          {formatDate(item.timestamp)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image and Logs */}
            <div className="space-y-6">
              {/* Product Image */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Product
                </h2>
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={shipment.productImage}
                    alt={shipment.productName}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-center font-medium text-gray-900">
                  {shipment.productName}
                </p>
              </div>

              {/* Recent Logs */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {shipment.logs.slice(0, 5).map((log, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-indigo-600 pl-4"
                    >
                      <p className="text-sm font-medium text-gray-900">
                        {log.event}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        {formatDate(log.timestamp)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
