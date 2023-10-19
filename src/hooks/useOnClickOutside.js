import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    // Event Function
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        // e.target이 발생한 자리 (클릭한 자리)가 .modal 이 아니거나, .modal의 후손인 경우
        return;
      } else {
        handler(e); //밖에서 받아온 handler 함수를 e에게 실행해버린다.
      }
    };

    // doc.EventListener
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      // Event 해제
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
