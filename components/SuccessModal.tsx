import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary">Mensaje Enviado al Vacío</DialogTitle>
          <DialogDescription>
            Tu mensaje ha sido recibido por las entidades cósmicas. Que los Antiguos sean benevolentes con tu cordura.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button onClick={onClose} className="w-full">
            Cerrar Portal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}