export function ParentComponent() {

	const [dataFromChild, setDataFromChild] = useState(null);

	const handleDataFromChild = (data) => {
		setDataFromChild(data)
	};

	return (
	<div>
	<p>
		Data from Child <b><dataFromChild}</b>
	</p>
	<span />
	<ChildComponent sendDataToParent={handDataFromChild} />
	</div>
	)
}

function ChildComponet(props) {
	return (
		<div>
			<h3>Child</h3>
			<input
				placeholder="Child Input"
				onChange{(e) => preps.sendDataToParent(e.traget.value)}
			/>
		</div>
	);
}