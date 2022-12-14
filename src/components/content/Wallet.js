import React from "react";

import price from '../../images/icon_1.PNG'
import compare from '../../images/icon_2.PNG'
import convert from '../../images/icon_3.PNG'
import watchlist from '../../images/icon_4.PNG'
import Icon from "../common/Icon";
import Section from "../common/Section";

function Wallet() {
  return (
    <Section title={"Your Wallet"}>
      <div className="wallet max-h-full flex flex-col justify-center items-center  md:flex-row ">
        <div className="current__balance ">
          <span className="balance__title">current balance</span>
          <span className="blance__amount">$58,072.25</span>
          <div className="balance__rating">
            <span className="rating__percentage">
              <i class="uil uil-angle-up"></i>
              2.6%
            </span>
            <span className="rating__amount">(+532.23)</span>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4  gap-2 mx-10 mt-10 md:mt-0 ">
            <Icon icon={price} title='Price alert'/>
            <Icon icon={compare} title='Compare'/>
            <Icon icon={convert} title='Convert'/>
            <Icon icon={watchlist} title='Watchlist'/>
        </div>
      </div>
    </Section>
  );
}

export default Wallet;
