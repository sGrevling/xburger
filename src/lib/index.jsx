import React, {useState, useEffect, Fragment} from 'react';
import './index.css';

let timeout;

const Button = ({open, transitionTime, c}) => {
    const [stage2open, setStage2open] = useState(open);

    const tt = transitionTime * .6;

    useEffect(() => {
        if (timeout) clearTimeout(timeout);
        timeout = undefined;
        if (open === stage2open) return;
        timeout = setTimeout(() => setStage2open(s2o => !s2o), tt * .6)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, stage2open])


    const renderPath = (d1, d2, o) => (
        <path
            style={{transition: `d ${tt}ms ease-out`}}
            d={o ? d2 : d1}
            fill={c}
            className={'mainShape'}
        />
    )

    return (
        <svg
            className="xburgerButton"
            viewBox="0 0 132.29166 132.29167"
            height="30" width="30"
        >
            {renderPath(
                "m 4.0263095,14.267981 125.3180305,-0.01822 0.003,18.591625 -125.3180367,0.01823 z",
                "M 28.846694,14.020461 117.45992,106.30873 104.83715,119.455 16.223931,27.166726 Z",
                open
            )}
            {renderPath(
                "M 3.4245129,57.752314 H 128.74254 V 76.343939 H 3.4245129 Z",
                "M 67.752314,57.752314 H 67.752314 V 76.343939 H 67.752314 Z",
                stage2open
            )}
            {renderPath(
                "m 3.3906325,100.69908 125.3180175,0.008 -0.001,18.59162 -125.3180167,-0.008 z",
                "M 16.175122,106.15278 104.78835,13.864516 117.41112,27.010786 28.79789,119.29905 Z",
                open
            )}
        </svg>
    );
}

const Menu = ({children, onCloseClickOverride, shouldCloseOnClick, transitionTime, zIndexLow, color, bgColor, backdropColor}) => {
    const [show, setShow] = useState(false);
    const tt = transitionTime ?? 400,
        zi = zIndexLow ?? 2,
        c = color ?? 'white',
        bgc = bgColor ?? 'hotpink',
        bdc = backdropColor ?? '#e3e6e850';
    return (
        <Fragment>
            <div
                className={`xburgerTouchOutsideSensor ${show ? ' show' : ''}`}
                onClick={() => setShow(false)}
                style={{
                    transition: `opacity ${tt}ms ease-out`,
                    zIndex: zi,
                    backgroundColor: bdc
                }}
            />
            <button
                className={'xburgerMenuButton'}
                onClick={() => onCloseClickOverride ? onCloseClickOverride() : setShow(!show)}
                style={{
                    zIndex: zi + 2,
                    backgroundColor: bgc
                }}
            >
                <Button
                    open={!!(show || onCloseClickOverride)}
                    transitionTime={tt}
                    c={c}
                />
            </button>
            <div
                className={`xburgerMenu ${show ? ' show' : ''}`}
                onClick={(e) => shouldCloseOnClick && shouldCloseOnClick(e) && setShow(false)}
                style={{
                    transition: `left ${tt}ms ease-out, right ${tt}ms ease-out`,
                    zIndex: zi + 1,
                    color: c,
                    backgroundColor: bgc
                }}
            >
                {children}
            </div>
        </Fragment>
    );
}

export default Menu;