"use client"

import AdminLayout from "@/components/layout/AdminLayout";
import React, { JSX } from "react";


export default function Adminlayout({children}: {children: React.ReactNode}): JSX.Element{
    return (
        <AdminLayout>{children}</AdminLayout>
    )
}