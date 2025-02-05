'use client'
import { Breadcrumb } from "@/components/Breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { SuccessModal } from "@/components/SuccessModal"

export default function CommunePage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { data, error } = await supabase.from("contacts").insert([formData]);

        if (error) {
            console.error("Error al enviar el formulario:", error.message);
            alert("Hubo un error al enviar el mensaje.");
        } else {
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        }

        setLoading(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={[{ label: "Comuna", href: "/commune" }]} />
            <h1 className="text-4xl font-bold mb-8 text-primary text-shadow">Contacto con lo Desconocido</h1>

            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl mb-2 text-primary">Contacta con el Vacío</CardTitle>
                    <CardDescription>Deja un mensaje para las entidades cósmicas... si te atreves.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                                Tu Nombre (o Seudónimo)
                            </label>
                            <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Randolph Carter" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                Dirección de Correo Electrónico
                            </label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="cultista@miskatonic.edu" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                                Tu Mensaje al Cosmos
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn..."
                                className="h-32"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Enviando..." : "Enviar al Abismo"}
                        </Button>
                        {success && (
                            <SuccessModal
                                isOpen={success}
                                onClose={() => setSuccess(false)}
                            />
                        )}
                    </form>
                </CardContent>
            </Card>

            <div className="mt-12 text-center text-sm text-muted-foreground">
                <p>Advertencia: Las respuestas pueden llevar al receptor al borde de la locura.</p>
                <p>La Universidad Miskatonic no se hace responsable de ninguna pérdida de cordura incurrida.</p>
            </div>
        </div>
    )
}