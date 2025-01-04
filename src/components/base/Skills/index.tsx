import { AllSkills } from "@/config/allSkills.config";
import { MainTechnologies } from "@/config/mainTecnologies.config";

type MainSkillsProps = {
    variant?: "all" | "any" | "main"
}

export function Skills({ variant = "all" }: MainSkillsProps) {
    const mainSkills = MainTechnologies;
    const allSkills = AllSkills;
    const anySkills = allSkills.slice(0, 6)

    if (variant === "main") {
        return (
            <div className="p-[20px] flex gap-4">
                {mainSkills &&
                    mainSkills.map(({ name, src, alt }) => (
                        <span key={name}>
                            <img src={src} alt={alt} width={50} title={name} height={50} />
                        </span>
                    ))
                }
            </div>
        );
    } else if (variant === "any") {
        return (
            anySkills.map(({ id, name, role, alt, src, width }) => (
                <div className="flex py-[15px] px-[10px] gap-[15px] border border-blue900 max-w-[420px] rounded-md hover:bg-blue900p10" key={id}>
                    <span className="my-auto">
                        <img src={src} alt={alt} width={width} title={name} />
                    </span>
                    <div>
                        <h3 className="font-bold text-blue900">{name}</h3>
                        <span className="text-xs text-blue900p80">{role}</span>
                    </div>
                </div>
            ))
        );
    }


    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {
                allSkills.map(({ id, name, role, alt, src, width }) => (
                    <div className="flex py-[15px] px-[10px] gap-[15px] border border-blue900 min rounded-md hover:bg-blue900p10" key={id}>
                        <span className="my-auto">
                            <img src={src} alt={alt} width={width} title={name} />
                        </span>
                        <div>
                            <h3 className="font-bold text-blue900">{name}</h3>
                            <span className="text-xs text-blue900p80">{role}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}