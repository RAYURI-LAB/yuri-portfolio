import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-start justify-center py-24 md:py-32">
      <p className="text-sm font-medium tracking-[0.14em] text-accent uppercase">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        요청하신 페이지 또는 프로젝트가 존재하지 않습니다. 주소가 올바른지
        확인해 주세요.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" variant="primary">
          홈으로
        </Button>
        <Button href="/#projects" variant="secondary">
          프로젝트 보기
        </Button>
      </div>
      <p className="mt-6 text-sm text-subtle">
        또는{" "}
        <Link href="/" className="text-accent hover:text-accent-hover">
          홈페이지로 돌아가기
        </Link>
      </p>
    </div>
  );
}
