import trendup from "../../assets/trendup.svg";
import trenddown from "../../assets/trenddown.svg";
const Card = (props) => {
  const { card } = props;
  return (
    <>
      <div className="h-[156px] p-6 rounded-[20px] bg-white border border-[#DCDFE4] transition-shadow duration-500 hover:shadow-xl flex flex-col shadow">
        <h3 className="text-[12px] text-[#667085] font-[600] leading-[30px] tracking-[0.5px] uppercase flex items-center">
          {card.icon && (
            <div className="pr-3">
              <img src={card.icon} />
            </div>
          )}

          {card.title}
        </h3>
        <p className="text-[32px] text-[#212636] font-[500] leading-[38.4px] tracking-[-0.02em]">
          {card.value}
        </p>
        {card.change && (
          <div className="flex items-center mt-2">
            {card.increase ? (
              <div className="mr-2">
                <img src={trendup} />
              </div>
            ) : (
              <div className="mr-2">
                <img src={trenddown} />
              </div>
            )}
            <p
              className={`text-[14px] font-[400] leading-[21.98px] tracking-[-0.01em] ${card.color} mr-1`}
            >
              {card.change}
            </p>
            <p>
              {card.increase ? (
                <p
                  className={`text-[14px] font-[400] leading-[21.98px] tracking-[-0.01em] text-[#667085]`}
                >
                  increase
                </p>
              ) : (
                <p
                  className={`text-[14px] font-[400] leading-[21.98px] tracking-[-0.01em] text-[#667085]`}
                >
                  decrease
                </p>
              )}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
