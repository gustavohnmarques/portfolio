import type { Project } from "../../types/Project.types";

export interface ModalProjectDetailsProps extends Project {
    onRequestClose: () => void;
}