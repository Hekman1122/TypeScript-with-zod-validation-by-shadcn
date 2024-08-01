import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import FormComponent from "./FormComponent";
export default function ModalContainer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-sm font-bold">
          Add user
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Create new user
          </DialogTitle>
        </DialogHeader>
        <FormComponent />
      </DialogContent>
    </Dialog>
  );
}
