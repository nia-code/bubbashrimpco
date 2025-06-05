'use client'
import { useState, useEffect } from 'react'
import Index from "@/components/menu/Index";
import { useParams } from 'next/navigation'

export default function Home() {
    const { cat } = useParams();

    // Ensure `cat` is a string. If it's an array, take the first element.
    const category = Array.isArray(cat) ? cat[0] : cat;

    return (
        <main className="min-h-screen w-full">
            <Index category={category} />
        </main>
    );
}
