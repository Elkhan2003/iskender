import React, { FC, ReactNode } from "react";
import { ReduxProvider } from "@/redux/provider";

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	return (
		<>
			<ReduxProvider>{children}</ReduxProvider>
		</>
	);
};
export default LayoutRoot;
