function FundingPage() {
  return (
    <section className="mb-16 mt-8">
      <h2 className="text-xl mb-8 border-l-4 border-[#30E2DD]  text-[#30E2DD] pl-4 flex items-center">
        製作費補助
      </h2>
      <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-25 mb-2 flex justify-center items-center">
        入 選
      </div>
      <div className="my-4">
        入選製作費補助:入選者完成切結書簽署，並於114年7月5日前繳交12-30分鐘成片，社會組享有新台幣20,000元，學生組10,000元的基本製作費資助
      </div>
      <div className="w-full">
        <img
          src="https://web.forestdev.work/chiayi/opencall/f01_v1.svg"
          alt="group"
          className="w-full"
        />
      </div>
      <div className="font-bold rounded-full bg-[#30E2DD] text-black p-2 px-4 w-40 mb-2 flex justify-center items-center">
        決選製作輔導費
      </div>
      <div className="my-4">
        針對入選者作品，再從中進行決選，頒發決選製作輔導費
      </div>
      <div className="w-full flex gap-14">
        <div className="w-1/5">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f02.png"
            alt="group"
            className="w-full"
          />
        </div>
        <div className="w-5/6 flex flex-col gap-10">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f04.png"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f05.png?v=2"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f06.png?v=2"
            alt="group"
            className="w-full"
          />
        </div>
      </div>
      <div className="h-[1px] w-full bg-amber-50 my-10"></div>
      <div className="w-full flex gap-14">
        <div className="w-1/5">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f03.png"
            alt="group"
            className="w-full"
          />
        </div>
        <div className="w-5/6 flex flex-col gap-10">
          <img
            src="https://web.forestdev.work/chiayi/opencall/f07.png?v=2"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f08.png?v=2"
            alt="group"
            className="w-full"
          />
          <img
            src="https://web.forestdev.work/chiayi/opencall/f09.png?v=2"
            alt="group"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default FundingPage;
