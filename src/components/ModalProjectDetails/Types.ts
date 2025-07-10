import type { Project } from "../../types/Project.stypes";

export interface ModalProjectDetailsProps extends Project {
    onRequestClose: () => void;
}