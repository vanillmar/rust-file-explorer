import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ArrowUp, RefreshCcw } from "lucide-react"

export interface NavigationButtomsProps {
  goUp: () => void
}

export default function NavigationButtoms({ goUp }: Readonly<NavigationButtomsProps>) {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon">
        <ArrowLeft className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <ArrowRight className="w-4 h-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={goUp}
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <RefreshCcw className="w-4 h-4" />
      </Button>
    </div>
  )
}
