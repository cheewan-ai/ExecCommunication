"use client";

import { useEffect, useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { StatCard } from "@/components/StatCard";
import { Card } from "@/components/Card";
import { CalloutBox } from "@/components/CalloutBox";
import { getCurrentUser, type AuthUser } from "@/lib/auth";

export default function DashboardPage() {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div>
      <Eyebrow>Your Progress</Eyebrow>
      <h1 className="section-title">Dashboard</h1>
      <p className="text-[14px] text-ink2 mb-5 leading-[1.75]">
        {user
          ? `Welcome back, ${user.email.split("@")[0]}. Here's the read-out.`
          : "Welcome back. Here's the read-out."}
      </p>

      <Card label="Today">
        <div className="grid grid-cols-3 gap-3">
          <StatCard num="0" label="Drills today" />
          <StatCard num="—" label="Average length" color="c5" />
          <StatCard num="—" label="Filler count" color="c3" />
        </div>
        <p className="text-[13px] text-ink2 mt-3.5 leading-[1.65]">
          You haven&rsquo;t logged any drills yet today. Open Practice Drill,
          pick a card, run the timer, and the numbers start filling in.
        </p>
      </Card>

      <Card label="This Week">
        <div className="grid grid-cols-3 gap-3">
          <StatCard num="0" label="Sessions" />
          <StatCard num="—" label="Best run" color="c3" />
          <StatCard num="—" label="Streak" color="c5" />
        </div>
      </Card>

      <CalloutBox variant="info" label="DASHBOARD STATUS">
        <p className="m-0">
          Phase 1 build — the dashboard tracks structure but doesn&rsquo;t yet
          persist real metrics. Recording, scoring, and replay land in Phase 2
          alongside real auth and a backend.
        </p>
      </CalloutBox>
    </div>
  );
}
