import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-start justify-center py-28 md:py-36">
      <p className="label-mono text-[0.7rem] tracking-[0.3em] text-accent-ink">
        404
      </p>

      <h1 className="font-display mt-7 text-3xl leading-[1.3] font-medium text-foreground md:text-5xl md:leading-[1.22]">
        페이지를 찾을 수 없습니다
        <span aria-hidden className="text-accent">
          .
        </span>
      </h1>

      <p className="keep-all mt-6 max-w-md text-base leading-[1.95] text-muted">
        요청하신 페이지 또는 프로젝트가 존재하지 않습니다. 주소가 올바른지 확인해
        주세요.
      </p>

      <div className="mt-11 flex flex-wrap gap-3">
        <Button href="/" variant="primary">
          <span className="label-mono text-[0.7rem] tracking-[0.18em]">
            Home
          </span>
          <ArrowRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Button>
        <Button href="/#projects" variant="secondary">
          <span className="label-mono text-[0.7rem] tracking-[0.18em]">
            View Projects
          </span>
        </Button>
      </div>
    </div>
  );
}
