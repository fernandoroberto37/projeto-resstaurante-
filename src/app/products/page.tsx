

import { Button } from "@/components/consumption-method-option.tsx/button";
import { Input } from "@/components/consumption-method-option.tsx/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">products page</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="Bora fechar esse projeto!" />
    </div>
  );
};

export default ProductPage;
