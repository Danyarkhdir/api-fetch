export default function Profile() {
  return (
    <div className="w-full bg-slate-400 h-screen">
      <div className="pt-12 flex flex-col items-center h-full">
        <img
          src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1ODkxMTUyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
          className="w-400 h-400 rounded-full overflow-hidden"
          alt=""
        />
        <div className="mt-10">
          <h2 className="p-1 font-serif text-4xl font-extrabold">
            Danyar Khdir{" "}
          </h2>
          <p className="p-1"></p>
          <p className="p-1">Country</p>
        </div>
      </div>
    </div>
  );
}
