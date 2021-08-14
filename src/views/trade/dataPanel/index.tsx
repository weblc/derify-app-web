import React, { useState } from "react";
import IconFont from "@/components/IconFont";
import { Row, Col, Radio, Space, Modal, Statistic, Popover } from "antd";
import { RightOutlined } from "@ant-design/icons";

import Chart from "./Chart";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";

const timeOptions: Array<{ label: string; value: string }> = [
  { label: "1m", value: "1m" },
  { label: "5m", value: "5m" },
  { label: "15m", value: "15m" },
  { label: "1h", value: "1h" },
  { label: "4h", value: "4h" },
  { label: "1D", value: "1D" },
  { label: "1W", value: "1W" },
  { label: "1M", value: "1M" },
];
function DataPanel() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Row className="main-block data-panel-container">
      <Col
        flex="100%"
        className="derify-pointer"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        <span>ETH/USDT</span>
        <RightOutlined />
      </Col>
      <Col flex="100%">
        <Row justify={"space-between"} align="bottom">
          <Col>
            <Row className="trade-data">
              <Col>1234.56</Col>
              <Col>
                <span>+9999.8%</span>
              </Col>
            </Row>
          </Col>
          <Col className="text-right">
            <Row>
              <Col flex="100%">
                <Space size={4}>
                  <Popover
                    placement="bottom"
                    content={
                      <Row>
                        <Col className="title" flex="100%">
                          动仓费率：
                        </Col>
                        <Col>
                          系统对扩大裸头寸的仓位变动（开仓/平仓）行为进行惩罚，对减少裸头寸的仓位变动行为进行奖励。该值为正，则代表开多/平空需要支付动仓费，开空/平多可以获得动仓费；该值为负，则代表开空/平多需要支付动仓费，开多/平空可以获得动仓费。
                        </Col>
                      </Row>
                    }
                    trigger="hover"
                  >
                    <FormattedMessage id="trade.pcf.rate" />
                    <span>: -0.1234%</span>
                    <IconFont type="icon-wenhao" />
                  </Popover>
                </Space>
              </Col>
              <Col flex="100%">
                <Space size={4}>
                  持仓挖矿奖励
                  <span>
                    <span className="main-red">多</span> 0.01%/
                    <span className="main-green">空</span> 0.01%
                  </span>
                  <Popover
                    placement="bottom"
                    content={
                      <Row>
                        <Col className="title" flex="100%">
                          持仓挖矿收益率：
                        </Col>
                        <Col>
                          仓位杠杆越高，持仓挖矿的收益率越高。挖矿规则。
                        </Col>
                      </Row>
                    }
                    trigger="hover"
                  >
                    <IconFont type="icon-wenhao" />
                  </Popover>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col flex="100%">
        <Row justify="end" className="time-radio">
          <Radio.Group
            defaultValue={"15m"}
            options={timeOptions}
            optionType="button"
          />
        </Row>
      </Col>
      <Col flex="100%">
        <Chart />
      </Col>
      <Modal
        title={"市场"}
        footer={null}
        getContainer={false}
        focusTriggerAfterClose={false}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Row className="currency-list-wrapper">
          <Col flex="100%" className="active">
            <Row justify="space-between" align="middle">
              <Col className="currency">BTC / USDT</Col>
              <Col>
                <div>2345.67</div>
                <div>
                  <Statistic
                    className={classNames(
                      -123.41 > 0 ? "main-green" : "main-red "
                    )}
                    value={Math.abs(-123.41)}
                    prefix={-123.41 > 0 ? "+" : "-"}
                    suffix="%"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col flex="100%">
            <Row justify="space-between" align="middle">
              <Col>ETH / USDT</Col>
              <Col>
                <div>2345.67</div>
                <Statistic
                  className={classNames(
                    +123.41 > 0 ? "main-green" : "main-red "
                  )}
                  value={+123.41}
                  prefix={+123.41 > 0 ? "+" : "-"}
                  suffix="%"
                />
              </Col>
            </Row>
          </Col>
          <Col flex="100%" className="diable">
            <Row justify="space-between" align="middle">
              <Col>BNB / USDT</Col>
              <Col>
                <div>2345.67</div>
                <Statistic
                  className={classNames(
                    +123.41 > 0 ? "main-green" : "main-red "
                  )}
                  value={+123.41}
                  prefix={+123.41 > 0 ? "+" : "-"}
                  suffix="%"
                />
              </Col>
            </Row>
          </Col>
          <Col flex="100%" className="diable">
            <Row justify="space-between" align="middle">
              <Col>UNI / USDT</Col>
              <Col>
                <div>2345.67</div>
                <Statistic
                  className={classNames(
                    +123.41 > 0 ? "main-green" : "main-red "
                  )}
                  value={+123.41}
                  prefix={+123.41 > 0 ? "+" : "-"}
                  suffix="%"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </Row>
  );
}

export default DataPanel;
