/* eslint-disable react-hooks/exhaustive-deps */

import React, { memo, useMemo } from 'react'
import { useScrollAware } from '../hooks/useScrollAware'
const Chance = require('chance')
const chance = new Chance()

/*
    NOETE:
    - height, can be fixed by removing props and add static initial value.
    - chance used to generate random data, can be replaced with real backend data.
*/

const VirtualScroll = ({ Item, itemCount, height, childHeight, renderAhread = 20 }) => {
    const [scrollTop, ref] = useScrollAware()
    const totalHeight = itemCount * childHeight

    let startNode = Math.floor(scrollTop / childHeight) - renderAhread
    startNode = Math.max(0, startNode)

    let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhread
    visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount)

    const offsetY = startNode * childHeight

    const visibleChildren = useMemo(
        () =>
            new Array(visibleNodeCount).fill(null).map((_, index) => (
                <>
                    <Item
                        key={index + startNode}
                        index={index + startNode}
                        subject={chance.name()}
                        priority={chance.syllable()}
                        status={chance.word()}
                        description={chance.paragraph()}
                    />
                </>
            )),
        [startNode, visibleNodeCount, Item]
    )

    return (
        <div style={{ height, overflow: 'auto' }} ref={ref}>
            <div
                className="viewport"
                style={{
                    overflow: 'hidden',
                    willChange: 'transform',
                    height: totalHeight,
                    position: 'relative'
                }}
            >
                <div
                    style={{
                        willChange: 'transform',
                        transform: `translateY(${offsetY}px)`
                    }}
                >
                    {visibleChildren}
                </div>
            </div>
        </div>
    )
}

export default memo(VirtualScroll)
