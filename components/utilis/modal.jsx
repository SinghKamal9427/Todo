import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import InputBox from "./inputBox";
import { Formik, Form } from "formik";
import Button from "./button";
import { TodoSchema } from "../validation/schema";
import axios from "axios";

const ModalCustom = ({ buttonText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    todoName: "",
    todoDescriptions: "",
  };

  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      await axios
        .post(
          "http://localhost:4000/addTodo",
          {
            values: values,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      console.log(e);
    }
    console.log(values);
    // Add your login logic here
    setSubmitting(false);
    onClose();
  };

  return (
    <>
      <Button
        outerStyle={"w-[140px] bg-white px-2"}
        text={buttonText}
        middleStyle={"gap-0"}
        innerStyle={"text-black text-sm"}
        onPress={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} className="!z-[1010]">
        <ModalOverlay className="bg-[#000] !opacity-30" />
        <ModalContent className="!z-[1002] !m-auto !w-max min-w-[350px] !max-w-[85%] md:top-[12vh]">
          <ModalBody className="font-bold flex flex-col gap-2 w-[100%] rounded-xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="px-[30px] py-[30px]  max-w-[450px] flex flex-col gap-6 !z-[1004]">
              <h1 className="text-2xl font-bold">Add Todo</h1>

              <Formik
                initialValues={initialValues}
                validationSchema={TodoSchema}
                onSubmit={handleLoginSubmit}
              >
                <Form className="flex flex-col gap-4">
                  <InputBox
                    lableName={"Name"}
                    labelPlaceHolder={"Enter todo name"}
                    name={"todoName"}
                    type={"text"}
                  />
                  <InputBox
                    lableName={"Description"}
                    labelPlaceHolder={"Enter todo description"}
                    name={"todoDescriptions"}
                    type={"text"}
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={onClose}
                      type="button"
                      className="linear rounded-xl border-2 border-red-500 px-5 py-3 text-base font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 dark:border-red-400 dark:bg-red-400/10 dark:text-white dark:hover:bg-red-300/10 dark:active:bg-red-200/10"
                    >
                      Close
                    </button>
                    <button
                      className="linear text-navy-700 rounded-xl bg-gray-100 px-5 py-3 text-base font-medium transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                      type="submit"
                    >
                      Add Todo
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalCustom;
