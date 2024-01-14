import Image from "next/image";

import * as F from "./styled";

export default function AddLink() {
  return (
    <F.addLink>
      <div style={{ width: "20px", height: "20px", position: "relative" }}>
        <Image src="/img/link.png" alt="linkimg" fill style={{ objectFit: "cover" }} />
      </div>
      <F.addInput placeholder="링크를 추가해 보세요" />
      <F.addButton>추가하기</F.addButton>
    </F.addLink>
  );
}
