"use client";

import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    desabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}