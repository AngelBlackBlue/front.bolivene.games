import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Search = () => {
  const lenguages = [
    {value : "All", label: "All"},
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "pt", label: "Portuguese" },
    { value: "zh", label: "Chinese" },
  ];

  return (
    <div className="container mx-[auto]">
      <div className="flex items-center gap-4 pt-4">
        <div className="uppercase">Idioma:</div>
        <Select>
          <SelectTrigger className="w-[180px] bg-transparent border-[#1D161E] focus:border-none">
            <SelectValue placeholder="All"  />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className=" bg-[#220874] border-none hover:border-none text-white">
              <SelectLabel className=""></SelectLabel>
                 {lenguages.map((lenguage) => (
                <SelectItem key={lenguage.value} value={lenguage.value} className="focus:bg-[#f2003a] focus:text-none">
                  {lenguage.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <div className="uppercase">Name</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
