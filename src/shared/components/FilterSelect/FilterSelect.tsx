import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterSelect() {
  return (
    <div className="w-full max-w-3xl bg-[#f6f1e7] rounded-lg shadow p-4 mb-6 border border-[#d6cfc1] flex flex-col md:flex-row gap-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select X" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>X</SelectLabel>
            <SelectItem value="apple">1</SelectItem>
            <SelectItem value="banana">2</SelectItem>
            <SelectItem value="blueberry">3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
