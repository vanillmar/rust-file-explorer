import { Input } from "@/components/ui/input";

{/* Center: Address bar (60% width) */}
export default function AddressBar () { 
    return(
        <div className="flex-1">
        <Input
          className="w-full"
          placeholder="C:/Users/YourUser/Documents"
        />
      </div>
    )
}