import { Folder } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-muted h-full overflow-y-auto">
      <div className="p-2 font-semibold text-sm text-muted-foreground">
        Folders
      </div>
      <Accordion type="multiple" className="px-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            <Folder className="mr-2 h-4 w-4" />
            Documents
          </AccordionTrigger>
          <AccordionContent className="pl-6">
            <div className="py-1">Reports</div>
            <div className="py-1">Invoices</div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            <Folder className="mr-2 h-4 w-4" />
            Pictures
          </AccordionTrigger>
          <AccordionContent className="pl-6">
            <div className="py-1">Vacations</div>
            <div className="py-1">Wallpapers</div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            <Folder className="mr-2 h-4 w-4" />
            Downloads
          </AccordionTrigger>
          <AccordionContent className="pl-6">
            <div className="py-1">Setups</div>
            <div className="py-1">Compressed</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
