import { useState } from "react";

export function ParentComponent() {

	const [dataFromChild, setDataFromChild] = useState<string | null>(null);

	const handleDataFromChild = (data: string) => {
		setDataFromChild(data)
	};

	return (
	<div>
	<p>
		Data from Child <b>{dataFromChild}</b>
	</p>
	<span />
	<ChildComponent sendDataToParent={handleDataFromChild} />
	</div>
	)
}

interface ChildProps {
	sendDataToParent: (data: string) => void;
}

function ChildComponent(props: ChildProps) {
	return (
		<div>
			<h3>Child</h3>
			<input
				placeholder="Child Input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.sendDataToParent(e.target.value)}
			/>
		</div>
	);
}