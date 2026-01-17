/**
 * (c) 2025 Corol. All Rights Reserved.
 * Proprietary and Confidential. 
 * Unauthorized copying or distribution is strictly prohibited.
 **/
async function instantiate(module, imports={}) {
    const adaptedImports = {
        env: Object.setPrototypeOf({
            abort(message, fileName, lineNumber, columnNumber) {
                message = __liftString(message >>> 0),
                fileName = __liftString(fileName >>> 0),
                lineNumber = lineNumber >>> 0,
                columnNumber = columnNumber >>> 0,
                ( () => {
                    throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`)
                }
                )()
            },
            renderer_flush(tape_ptr, size, stride, floats_offset, text_ptr_offset, context_id_offset, context_id2_offset) {
                tape_ptr = tape_ptr >>> 0,
                size = size >>> 0,
                stride = stride >>> 0,
                floats_offset = floats_offset >>> 0,
                text_ptr_offset = text_ptr_offset >>> 0,
                context_id_offset = context_id_offset >>> 0,
                context_id2_offset = context_id2_offset >>> 0,
                ( () => {
                    let heap8 = globalThis.__heap8
                      , heap16 = globalThis.__heap16
                      , heap32 = globalThis.__heap32
                      , heapf32 = globalThis.__heapf32;
                    (!heapf32 || heapf32.buffer !== memory2.buffer || !heap16 || heap16.buffer !== memory2.buffer) && (heap8 = globalThis.__heap8 = new Uint8Array(memory2.buffer),
                    heap16 = globalThis.__heap16 = new Uint16Array(memory2.buffer),
                    heap32 = globalThis.__heap32 = new Uint32Array(memory2.buffer),
                    heapf32 = globalThis.__heapf32 = new Float32Array(memory2.buffer));
                    const contexts = globalThis.__ctxs || (globalThis.__ctxs = []);
                    contexts.length == 0 && globalThis.__ctx && (contexts[0] = globalThis.__ctx);
                    const gradients = globalThis.__gradient_cache || (globalThis.__gradient_cache = Object.create(null))
                      , tile_sets = globalThis.__tile_sets || (globalThis.__tile_sets = Object.create(null));
                    let path2d_cache = globalThis.__path2d
                      , path2d_svg = globalThis.__path2d_svg
                      , ip = tape_ptr;
                    for (let n = 0; n < size; ++n) {
                        const op = heap8[ip]
                          , fi = ip + floats_offset >>> 2
                          , ctx_id = heap16[ip + context_id_offset >>> 1]
                          , ctx_id_2 = heap16[ip + context_id2_offset >>> 1]
                          , ctx = contexts[ctx_id];
                        if (!ctx) {
                            ip += stride;
                            continue
                        }
                        switch (op) {
                        case 0:
                        case 1:
                            {
                                const r = heapf32[fi]
                                  , g = heapf32[fi + 1]
                                  , b = heapf32[fi + 2]
                                  , a = heapf32[fi + 3]
                                  , style = `rgba(${r},${g},${b},${a})`;
                                op === 0 ? ctx.fillStyle = style : ctx.strokeStyle = style;
                                break
                            }
                        case 2:
                            ctx.lineWidth = heapf32[fi];
                            break;
                        case 3:
                            ctx.font = "700 " + heapf32[fi] + "px Ubuntu";
                            break;
                        case 4:
                            ctx.globalAlpha = heapf32[fi];
                            break;
                        case 5:
                            ctx.lineCap = "round";
                            break;
                        case 6:
                            ctx.lineJoin = "round";
                            break;
                        case 7:
                            ctx.textAlign = "center";
                            break;
                        case 8:
                            ctx.textBaseline = "middle";
                            break;
                        case 9:
                            ctx.setTransform(heapf32[fi], heapf32[fi + 1], heapf32[fi + 3], heapf32[fi + 4], heapf32[fi + 2], heapf32[fi + 5]);
                            break;
                        case 10:
                            ctx.save();
                            break;
                        case 11:
                            ctx.restore();
                            break;
                        case 12:
                            ctx.beginPath();
                            break;
                        case 13:
                            ctx.moveTo(heapf32[fi], heapf32[fi + 1]);
                            break;
                        case 14:
                            ctx.lineTo(heapf32[fi], heapf32[fi + 1]);
                            break;
                        case 15:
                            ctx.quadraticCurveTo(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3]);
                            break;
                        case 16:
                            ctx.bezierCurveTo(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], heapf32[fi + 5]);
                            break;
                        case 17:
                            ctx.arc(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], !!heapf32[fi + 5]);
                            break;
                        case 18:
                            ctx.ellipse(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], 0, 0, Math.PI * 2);
                            break;
                        case 19:
                            ctx.rect(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3]);
                            break;
                        case 20:
                            ctx.roundRect(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4]);
                            break;
                        case 21:
                            ctx.fillRect(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3]);
                            break;
                        case 22:
                            ctx.strokeRect(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3]);
                            break;
                        case 23:
                            ctx.fill();
                            break;
                        case 24:
                            ctx.stroke();
                            break;
                        case 25:
                            ctx.clip();
                            break;
                        case 26:
                            ctx.fillText(__liftString(heap32[ip + text_ptr_offset >>> 2]), 0, 0);
                            break;
                        case 27:
                            ctx.strokeText(__liftString(heap32[ip + text_ptr_offset >>> 2]), 0, 0);
                            break;
                        case 28:
                            ctx.closePath();
                            break;
                        case 29:
                            ctx.textAlign = "left";
                            break;
                        case 30:
                            ctx.textAlign = "right";
                            break;
                        case 31:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2];
                                gradients[id] = ctx.createRadialGradient(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], heapf32[fi + 5]);
                                break
                            }
                        case 32:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2];
                                gradients[id] = ctx.createLinearGradient(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3]);
                                break
                            }
                        case 33:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , g = gradients[id];
                                g && g.addColorStop(heapf32[fi], `rgba(${heapf32[fi + 1]},${heapf32[fi + 2]},${heapf32[fi + 3]},${heapf32[fi + 4]})`);
                                break
                            }
                        case 34:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , g = gradients[id];
                                g && (ctx.fillStyle = g);
                                break
                            }
                        case 35:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , g = gradients[id];
                                g && (ctx.strokeStyle = g);
                                break
                            }
                        case 36:
                            ctx.letterSpacing = heapf32[fi] + "px";
                            break;
                        case 37:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2];
                                path2d_cache || (path2d_cache = globalThis.__path2d = {}),
                                path2d_svg != null ? (path2d_cache[id] = new Path2D(path2d_svg),
                                path2d_svg = globalThis.__path2d_svg = null) : path2d_cache[id] = new Path2D;
                                break
                            }
                        case 56:
                            {
                                path2d_svg = globalThis.__path2d_svg = __liftString(heap32[ip + text_ptr_offset >>> 2]);
                                break
                            }
                        case 38:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.moveTo(heapf32[fi], heapf32[fi + 1]);
                                break
                            }
                        case 39:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.lineTo(heapf32[fi], heapf32[fi + 1]);
                                break
                            }
                        case 40:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.arc(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], !!heapf32[fi + 5]);
                                break
                            }
                        case 41:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.rect(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3]);
                                break
                            }
                        case 42:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.closePath();
                                break
                            }
                        case 43:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && ctx.fill(p);
                                break
                            }
                        case 44:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && ctx.stroke(p);
                                break
                            }
                        case 45:
                            {
                                const rule = heapf32[fi];
                                ctx.fill(rule != 0 ? "evenodd" : "nonzero");
                                break
                            }
                        case 46:
                            {
                                const mode = heapf32[fi];
                                ctx.globalCompositeOperation = mode === 0 ? "source-over" : "destination-out";
                                break
                            }
                        case 47:
                            {
                                const src_ctx = contexts[ctx_id_2];
                                src_ctx && ctx.drawImage(src_ctx.canvas, heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], heapf32[fi + 5], heapf32[fi + 2], heapf32[fi + 3]);
                                break
                            }
                        case 55:
                            {
                                const src_ctx = contexts[ctx_id_2];
                                if (src_ctx) {
                                    const packed = heap32[ip + text_ptr_offset >>> 2]
                                      , dw = packed & 65535
                                      , dh = packed >>> 16;
                                    ctx.drawImage(src_ctx.canvas, heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], heapf32[fi + 5], dw, dh)
                                }
                                break
                            }
                        case 48:
                            {
                                const tile_set_id = heap32[ip + text_ptr_offset >>> 2]
                                  , set = tile_sets[tile_set_id];
                                if (!set)
                                    break;
                                const svgs = set.svgs
                                  , tile_count = set.count;
                                if (!svgs || tile_count == 0 || typeof Image > "u")
                                    break;
                                let images = set.images;
                                (!images || images.length != tile_count) && (images = set.images = new Array(tile_count));
                                let all_loaded = !0;
                                for (let i = 0; i < tile_count; i++) {
                                    let img = images[i];
                                    if (!img) {
                                        const svg = svgs[i] || ""
                                          , url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
                                        img = new Image,
                                        img.src = url,
                                        images[i] = img,
                                        all_loaded = !1;
                                        continue
                                    }
                                    (!img.complete || img.naturalWidth == 0) && (all_loaded = !1)
                                }
                                if (!all_loaded)
                                    break;
                                const x = heapf32[fi]
                                  , y = heapf32[fi + 1]
                                  , w = heapf32[fi + 2]
                                  , h = heapf32[fi + 3]
                                  , tile_size = heapf32[fi + 4]
                                  , scale = heapf32[fi + 5]
                                  , pixel_tile = Math.max(1, Math.min(2048, Math.floor(tile_size * scale + .5)));
                                let patterns = set.patterns;
                                patterns || (patterns = set.patterns = Object.create(null));
                                let pattern_lru = set.pattern_lru;
                                pattern_lru || (pattern_lru = set.pattern_lru = []);
                                const max_patterns = set.max_patterns || 10;
                                let pattern = patterns[pixel_tile];
                                if (!pattern) {
                                    const sheet_w = pixel_tile * tile_count
                                      , sheet_h = pixel_tile
                                      , sheet = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(sheet_w,sheet_h) : document.createElement("canvas");
                                    sheet.width = sheet_w,
                                    sheet.height = sheet_h;
                                    const sheet_ctx = sheet.getContext("2d");
                                    if (sheet_ctx) {
                                        sheet_ctx.clearRect(0, 0, sheet_w, sheet_h);
                                        for (let i = 0; i < tile_count; i++) {
                                            const img = images[i];
                                            !img || !img.complete || img.naturalWidth == 0 || sheet_ctx.drawImage(img, i * pixel_tile, 0, pixel_tile, pixel_tile)
                                        }
                                        if (pattern = ctx.createPattern(sheet, "repeat"),
                                        pattern) {
                                            if (pattern.setTransform && typeof DOMMatrix < "u") {
                                                const inv = tile_size / pixel_tile;
                                                pattern.setTransform(new DOMMatrix([inv, 0, 0, inv, 0, 0]))
                                            }
                                            patterns[pixel_tile] = pattern
                                        }
                                    }
                                }
                                if (pattern) {
                                    let lru_index = -1;
                                    for (let i = 0; i < pattern_lru.length; i++)
                                        if (pattern_lru[i] === pixel_tile) {
                                            lru_index = i;
                                            break
                                        }
                                    if (lru_index >= 0 && pattern_lru.splice(lru_index, 1),
                                    pattern_lru.push(pixel_tile),
                                    pattern_lru.length > max_patterns) {
                                        const old_key = pattern_lru.shift();
                                        old_key != null && delete patterns[old_key]
                                    }
                                    ctx.fillStyle = pattern,
                                    ctx.fillRect(x, y, w, h)
                                }
                                break
                            }
                        case 49:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.quadraticCurveTo(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3]);
                                break
                            }
                        case 50:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.bezierCurveTo(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], heapf32[fi + 5]);
                                break
                            }
                        case 51:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.ellipse(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4], 0, Math.PI * 2);
                                break
                            }
                        case 52:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && p.roundRect(heapf32[fi], heapf32[fi + 1], heapf32[fi + 2], heapf32[fi + 3], heapf32[fi + 4]);
                                break
                            }
                        case 53:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && ctx.fill(p, heapf32[fi] != 0 ? "evenodd" : "nonzero");
                                break
                            }
                        case 54:
                            {
                                const id = heap32[ip + text_ptr_offset >>> 2]
                                  , p = path2d_cache && path2d_cache[id];
                                p && ctx.clip(p);
                                break
                            }
                        }
                        ip += stride
                    }
                }
                )()
            },
            create_context() {
                return ( () => {
                    const contexts = globalThis.__ctxs || (globalThis.__ctxs = []);
                    contexts.length == 0 && globalThis.__ctx && (contexts[0] = globalThis.__ctx);
                    const ctx = (typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1,1) : document.createElement("canvas")).getContext("2d");
                    return contexts.push(ctx),
                    contexts.length - 1
                }
                )()
            },
            set_dimensions(id, w, h) {
                ( () => {
                    const contexts = globalThis.__ctxs || (globalThis.__ctxs = []);
                    contexts.length == 0 && globalThis.__ctx && (contexts[0] = globalThis.__ctx);
                    const ctx = contexts[id];
                    if (!ctx)
                        return;
                    const c = ctx.canvas;
                    c.width = w,
                    c.height = h
                }
                )()
            },
            check_zh_cn() {
                return ( () => {
                    try {
                        return navigator.languages.includes("zh-CN")
                    } catch {
                        return !1
                    }
                }
                )() ? 1 : 0
            },
            socket_send(ptr, offset, len) {
                ptr = ptr >>> 0,
                ( () => {
                    const socket = globalThis.__corol_socket;
                    if (!socket || socket.readyState !== 1)
                        return;
                    let heap8 = globalThis.__heap8;
                    (!heap8 || heap8.buffer !== memory2.buffer) && (heap8 = globalThis.__heap8 = new Uint8Array(memory2.buffer));
                    const view = heap8.subarray(ptr + offset, ptr + offset + len);
                    socket.send(view)
                }
                )()
            },
            dom_refresh_with_cache_bust() {
                ( () => {
                    try {
                        if (typeof window > "u")
                            return;
                        const window_location = window.location;
                        if (!window_location)
                            return;
                        const url = new URL(window_location.href)
                          , cache_bust = Date.now().toString();
                        url.searchParams.set("cache_bust", cache_bust),
                        window_location.replace(url.toString())
                    } catch {}
                }
                )()
            },
            storage_store(name, ptr, len) {
                name = __liftString(name >>> 0),
                ptr = ptr >>> 0,
                len = len >>> 0,
                ( () => {
                    let heap8 = globalThis.__heap8;
                    (!heap8 || heap8.buffer !== memory2.buffer) && (heap8 = globalThis.__heap8 = new Uint8Array(memory2.buffer));
                    const key = name
                      , value = (globalThis.__text_decoder || (globalThis.__text_decoder = new TextDecoder)).decode(heap8.subarray(ptr, ptr + len));
                    try {
                        localStorage[key] = value
                    } catch {}
                }
                )()
            },
            seed() {
                return Date.now() * Math.random()
            },
            socket_close() {
                ( () => {
                    const socket = globalThis.__corol_socket;
                    socket && (socket.readyState === 0 || socket.readyState === 1) && socket.close()
                }
                )()
            },
            check_mobile() {
                return ( () => {
                    try {
                        const ua = navigator.userAgent || ""
                          , is_android = /Android/i.test(ua)
                          , is_iphone = /iPhone|iPod/i.test(ua)
                          , is_ipad = /iPad/i.test(ua)
                          , is_ipados = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1
                          , is_mobi = /Mobi/i.test(ua)
                          , is_coarse = typeof matchMedia == "function" && matchMedia("(pointer: coarse)").matches;
                        return is_android || is_iphone || is_ipad || is_ipados || is_mobi || is_coarse
                    } catch {
                        return !1
                    }
                }
                )() ? 1 : 0
            },
            storage_retrieve(name, ptr, max_len) {
                return name = __liftString(name >>> 0),
                ptr = ptr >>> 0,
                max_len = max_len >>> 0,
                ( () => {
                    let heap8 = globalThis.__heap8;
                    (!heap8 || heap8.buffer !== memory2.buffer) && (heap8 = globalThis.__heap8 = new Uint8Array(memory2.buffer));
                    const key = name;
                    let value = "";
                    try {
                        value = localStorage[key] || ""
                    } catch {}
                    if (!value)
                        return 0;
                    value = value.slice(0, max_len);
                    const bytes = (globalThis.__text_encoder || (globalThis.__text_encoder = new TextEncoder)).encode(value);
                    return heap8.set(bytes.subarray(0, max_len), ptr),
                    bytes.length
                }
                )()
            },
            socket_set_should_reconnect(should_reconnect) {
                should_reconnect = should_reconnect != 0,
                ( () => {
                    if (globalThis.__corol_socket_should_reconnect = should_reconnect,
                    !should_reconnect) {
                        const timer = globalThis.__corol_socket_reconnect_timer;
                        timer && (clearTimeout(timer),
                        globalThis.__corol_socket_reconnect_timer = 0);
                        return
                    }
                    globalThis.__corol_socket_reconnect_blocked && (globalThis.__corol_socket_reconnect_blocked = !1),
                    !(typeof document < "u" && document.hidden) && globalThis.__corol_socket_connect && globalThis.__corol_socket_connect()
                }
                )()
            },
            dom_open_page(url_ptr) {
                url_ptr = __liftString(url_ptr >>> 0),
                ( () => {
                    try {
                        window.open(url_ptr, "_blank")
                    } catch {}
                }
                )()
            },
            mobile_input_set_value(value) {
                value = __liftString(value >>> 0),
                ( () => {
                    try {
                        if (typeof document > "u")
                            return;
                        const input = globalThis.__corol_mobile_input;
                        if (!input)
                            return;
                        input.value = value || ""
                    } catch {}
                }
                )()
            },
            mobile_input_set_rect(x, y, w, h, pad, font_px, text_fill) {
                text_fill = text_fill >>> 0,
                ( () => {
                    try {
                        if (typeof document > "u")
                            return;
                        const input = globalThis.__corol_mobile_input;
                        if (!input)
                            return;
                        const dpr = globalThis.devicePixelRatio || 1
                          , left = x / dpr
                          , top = y / dpr
                          , width = w / dpr
                          , height = h / dpr
                          , padding = pad / dpr
                          , font_size = font_px / dpr;
                        input.style.display = "block",
                        input.style.pointerEvents = "auto",
                        input.style.left = left + "px",
                        input.style.top = top + "px",
                        input.style.width = width + "px",
                        input.style.height = height + "px",
                        input.style.lineHeight = height + "px",
                        input.style.paddingLeft = padding + "px",
                        input.style.paddingRight = padding + "px",
                        input.style.fontSize = font_size + "px";
                        const a = text_fill >>> 24 & 255
                          , r = text_fill >>> 16 & 255
                          , g = text_fill >>> 8 & 255
                          , b = text_fill & 255
                          , alpha = a / 255
                          , color = "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
                        input.style.color = color,
                        input.style.caretColor = color
                    } catch {}
                }
                )()
            },
            mobile_input_focus() {
                ( () => {
                    try {
                        if (typeof document > "u")
                            return;
                        const input = globalThis.__corol_mobile_input;
                        if (!input || !input.focus)
                            return;
                        input.style.display = "block",
                        input.style.pointerEvents = "auto";
                        try {
                            input.focus({
                                preventScroll: !0
                            })
                        } catch {
                            input.focus()
                        }
                    } catch {}
                }
                )()
            },
            mobile_input_blur() {
                ( () => {
                    try {
                        if (typeof document > "u")
                            return;
                        const input = globalThis.__corol_mobile_input;
                        if (!input)
                            return;
                        input.blur && input.blur(),
                        input.style.display = "none",
                        input.style.pointerEvents = "none"
                    } catch {}
                }
                )()
            },
            "Date.now"() {
                return Date.now()
            },
            register_tile_svg(id, index, count, svg_ptr) {
                id = id >>> 0,
                index = index >>> 0,
                count = count >>> 0,
                svg_ptr = __liftString(svg_ptr >>> 0),
                ( () => {
                    const tile_sets = globalThis.__tile_sets || (globalThis.__tile_sets = Object.create(null));
                    let set = tile_sets[id];
                    !set || set.count !== count ? set = tile_sets[id] = {
                        svgs: new Array(count),
                        count,
                        pattern_lru: [],
                        max_patterns: 10
                    } : (set.pattern_lru || (set.pattern_lru = []),
                    set.max_patterns || (set.max_patterns = 10)),
                    set.svgs[index] = svg_ptr
                }
                )()
            },
            register_tile_set_base_rotations(id, r0, r1, r2, r3) {
                id = id >>> 0,
                ( () => {
                    const set = (globalThis.__tile_sets || (globalThis.__tile_sets = Object.create(null)))[id];
                    set && (set.base_rotations = [r0 & 3, r1 & 3, r2 & 3, r3 & 3])
                }
                )()
            },
            ensure_maze_tile_atlas(tile_set_id, pixel_tile) {
                return tile_set_id = tile_set_id >>> 0,
                pixel_tile = pixel_tile >>> 0,
                ( () => {
                    const contexts = globalThis.__ctxs || (globalThis.__ctxs = []);
                    contexts.length == 0 && globalThis.__ctx && (contexts[0] = globalThis.__ctx);
                    const set = (globalThis.__tile_sets || (globalThis.__tile_sets = Object.create(null)))[tile_set_id];
                    if (!set)
                        return 0;
                    const svgs = set.svgs
                      , tile_count = set.count;
                    if (!svgs || tile_count !== 4 || typeof Image > "u")
                        return 0;
                    const clamped = Math.max(1, Math.min(2046, pixel_tile | 0))
                      , base_rots = set.base_rotations || [0, 0, 0, 0];
                    let images = set.images;
                    (!images || images.length !== tile_count) && (images = set.images = new Array(tile_count));
                    let all_loaded = !0;
                    for (let i = 0; i < tile_count; i++) {
                        let img = images[i];
                        if (!img) {
                            const svg = svgs[i] || ""
                              , url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
                            img = new Image,
                            img.src = url,
                            images[i] = img,
                            all_loaded = !1;
                            continue
                        }
                        (!img.complete || img.naturalWidth == 0) && (all_loaded = !1)
                    }
                    if (!all_loaded)
                        return 0;
                    let atlases = set.atlases;
                    atlases || (atlases = set.atlases = Object.create(null));
                    let atlas_lru = set.atlas_lru;
                    atlas_lru || (atlas_lru = set.atlas_lru = []);
                    const max_atlases = set.max_atlases || 8
                      , existing = atlases[clamped];
                    if (existing) {
                        let lru_index = -1;
                        for (let i = 0; i < atlas_lru.length; i++)
                            if (atlas_lru[i] === clamped) {
                                lru_index = i;
                                break
                            }
                        return lru_index >= 0 && atlas_lru.splice(lru_index, 1),
                        atlas_lru.push(clamped),
                        existing | 0
                    }
                    const stride = clamped + 1 * 2
                      , sheet_w = stride * 4
                      , sheet_h = stride * 4
                      , canvas = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(sheet_w,sheet_h) : document.createElement("canvas");
                    canvas.width = sheet_w,
                    canvas.height = sheet_h;
                    const sheet_ctx = canvas.getContext("2d");
                    if (!sheet_ctx)
                        return 0;
                    sheet_ctx.clearRect(0, 0, sheet_w, sheet_h);
                    for (let variant_id = 0; variant_id < 16; variant_id++) {
                        const base_type = variant_id >> 2
                          , rotation = variant_id & 3
                          , img = images[base_type];
                        if (!img)
                            continue;
                        const dx = rotation * stride
                          , dy = base_type * stride
                          , cx = dx + stride * .5
                          , cy = dy + stride * .5;
                        sheet_ctx.save(),
                        sheet_ctx.translate(cx, cy);
                        const base_rot = (base_rots[base_type] | 0) & 3
                          , rot = rotation + base_rot & 3;
                        rot && sheet_ctx.rotate(rot * Math.PI * .5),
                        sheet_ctx.drawImage(img, -stride * .5, -stride * .5, stride, stride),
                        sheet_ctx.restore()
                    }
                    contexts.push(sheet_ctx);
                    const ctx_id = contexts.length - 1;
                    if (atlases[clamped] = ctx_id,
                    atlas_lru.push(clamped),
                    atlas_lru.length > max_atlases) {
                        const old_key = atlas_lru.shift();
                        if (old_key != null) {
                            const old_ctx_id = atlases[old_key];
                            old_ctx_id && (contexts[old_ctx_id] = null,
                            delete atlases[old_key])
                        }
                    }
                    return ctx_id | 0
                }
                )()
            },
            socket_connect(incoming_ptr, incoming_len, url) {
                incoming_ptr = incoming_ptr >>> 0,
                incoming_len = incoming_len >>> 0,
                url = __liftString(url >>> 0),
                globalThis.__corol_socket_incoming_ptr = incoming_ptr,
                globalThis.__corol_socket_incoming_len = incoming_len,
                globalThis.__corol_socket_url = url,
                globalThis.__corol_socket_url_str = globalThis.__liftString ? globalThis.__liftString(url) : url,
                globalThis.__corol_socket_should_reconnect === void 0 && (globalThis.__corol_socket_should_reconnect = !0),
                globalThis.__corol_socket_reconnect_blocked === void 0 && (globalThis.__corol_socket_reconnect_blocked = !1),
                globalThis.__corol_socket_handle_open || (globalThis.__corol_socket_handle_open = function() {
                    globalThis.__socket_on_raw_open && globalThis.__socket_on_raw_open()
                }
                ),
                globalThis.__corol_socket_handle_close || (globalThis.__corol_socket_handle_close = function(event) {
                    globalThis.__socket_on_close && globalThis.__socket_on_close(event.code, event.reason || ""),
                    event && event.reason === "Logged in elsewhere" && (globalThis.__corol_socket_reconnect_blocked = !0,
                    globalThis.__corol_socket_should_reconnect = !1),
                    globalThis.__corol_socket_should_reconnect && (typeof document < "u" && document.hidden || globalThis.__corol_socket_reconnect_timer || (globalThis.__corol_socket_reconnect_timer = setTimeout(globalThis.__corol_socket_connect, 1e3)))
                }
                ),
                globalThis.__corol_socket_handle_message || (globalThis.__corol_socket_handle_message = function(event) {
                    let heap8 = globalThis.__heap8;
                    (!heap8 || heap8.buffer !== memory2.buffer) && (heap8 = globalThis.__heap8 = new Uint8Array(memory2.buffer));
                    const data = new Uint8Array(event.data)
                      , incoming_len2 = globalThis.__corol_socket_incoming_len || 0
                      , incoming_ptr2 = globalThis.__corol_socket_incoming_ptr || 0
                      , ptr = globalThis.__socket_incoming_ptr ? globalThis.__socket_incoming_ptr() : incoming_ptr2
                      , len = data.length > incoming_len2 ? incoming_len2 : data.length;
                    heap8.set(data.subarray(0, len), ptr),
                    globalThis.__socket_on_raw_message && globalThis.__socket_on_raw_message(len)
                }
                ),
                globalThis.__corol_socket_connect || (globalThis.__corol_socket_connect = function() {
                    globalThis.__corol_socket_reconnect_timer = 0;
                    const url_str = globalThis.__corol_socket_url_str;
                    if (!url_str || typeof document < "u" && document.hidden || !globalThis.__corol_socket_should_reconnect)
                        return;
                    const socket = globalThis.__corol_socket;
                    if (socket && (socket.readyState === 0 || socket.readyState === 1))
                        return;
                    const next = new WebSocket(url_str);
                    next.binaryType = "arraybuffer",
                    next.onopen = globalThis.__corol_socket_handle_open,
                    next.onclose = globalThis.__corol_socket_handle_close,
                    next.onmessage = globalThis.__corol_socket_handle_message,
                    globalThis.__corol_socket = next
                }
                ),
                globalThis.__corol_socket_on_visibility_change || (globalThis.__corol_socket_on_visibility_change = function() {
                    if (typeof document > "u")
                        return;
                    if (document.hidden) {
                        const timer = globalThis.__corol_socket_reconnect_timer;
                        timer && (clearTimeout(timer),
                        globalThis.__corol_socket_reconnect_timer = 0);
                        return
                    }
                    globalThis.__corol_socket_reconnect_blocked && (globalThis.__corol_socket_reconnect_blocked = !1),
                    globalThis.__corol_socket_should_reconnect = !0,
                    globalThis.__corol_socket_connect()
                }
                ,
                typeof document < "u" && document.addEventListener && document.addEventListener("visibilitychange", globalThis.__corol_socket_on_visibility_change)),
                typeof document < "u" && !document.hidden && !globalThis.__corol_socket_reconnect_blocked && (globalThis.__corol_socket_should_reconnect = !0),
                globalThis.__corol_socket_connect()
            },
            socket_rand_u32() {
                return ( () => {
                    if (globalThis.crypto && globalThis.crypto.getRandomValues) {
                        const arr = new Uint32Array(1);
                        return globalThis.crypto.getRandomValues(arr),
                        arr[0] >>> 0
                    }
                    return Math.random() * 4294967296 >>> 0
                }
                )()
            },
            socket_close_with_code(code, reason) {
                reason = __liftString(reason >>> 0),
                ( () => {
                    const socket = globalThis.__corol_socket;
                    socket && (socket.readyState === 0 || socket.readyState === 1) && socket.close(code, reason)
                }
                )()
            }
        }, Object.assign(Object.create(globalThis), imports.env || {}))
    }
      , {exports} = await WebAssembly.instantiate(module, adaptedImports)
      , memory2 = exports.memory || imports.env.memory
      , adaptedExports = Object.setPrototypeOf({
        ClipboardEvent(value) {
            value = __lowerString(value) || __notnull(),
            exports.ClipboardEvent(value)
        },
        MobileInputOnInput(value) {
            value = __lowerString(value) || __notnull(),
            exports.MobileInputOnInput(value)
        },
        MobileInputTouchStart(x, y) {
            return exports.MobileInputTouchStart(x, y) != 0
        },
        MobileChatButtonTouchStart(x, y) {
            return exports.MobileChatButtonTouchStart(x, y) != 0
        },
        ConnectToServer(url) {
            url = __lowerString(url) || __notnull(),
            exports.ConnectToServer(url)
        },
        __socket_on_close(code, reason) {
            reason = __lowerString(reason) || __notnull(),
            exports.__socket_on_close(code, reason)
        },
        __socket_incoming_ptr() {
            return exports.__socket_incoming_ptr() >>> 0
        },
        GetUbuntuBoldFontPtr() {
            return exports.GetUbuntuBoldFontPtr() >>> 0
        },
        GetUbuntuBoldFontLength() {
            return exports.GetUbuntuBoldFontLength() >>> 0
        }
    }, exports);
    function __liftString(pointer) {
        if (!pointer)
            return null;
        const end = pointer + new Uint32Array(memory2.buffer)[pointer - 4 >>> 2] >>> 1
          , memoryU16 = new Uint16Array(memory2.buffer);
        let start = pointer >>> 1
          , string = "";
        for (; end - start > 1024; )
            string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
        return string + String.fromCharCode(...memoryU16.subarray(start, end))
    }
    function __lowerString(value) {
        if (value == null)
            return 0;
        const length = value.length
          , pointer = exports.__new(length << 1, 2) >>> 0
          , memoryU16 = new Uint16Array(memory2.buffer);
        for (let i = 0; i < length; ++i)
            memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
        return pointer
    }
    function __notnull() {
        throw TypeError("value must not be null")
    }
    return adaptedExports
}
const {memory, Init, Reset, Loop, Resize, MouseEvent, KeyEvent, TouchEvent, WheelEvent, BlurEvent, ClipboardEvent, MobileInputOnInput, MobileInputOnBlur, MobileInputTouchStart, MobileChatButtonTouchStart, ConnectToServer, __socket_on_raw_open, __socket_on_close, __socket_on_raw_message, __socket_incoming_ptr, GetUbuntuBoldFontPtr, GetUbuntuBoldFontLength} = await (async url => instantiate(await (async () => typeof process < "u" && process.versions != null && (process.versions.node != null || process.versions.bun != null) ? globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)) : await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)))(), {}))(new URL("release.wasm",import.meta.url));
export {BlurEvent, ClipboardEvent, ConnectToServer, GetUbuntuBoldFontLength, GetUbuntuBoldFontPtr, Init, KeyEvent, Loop, MobileChatButtonTouchStart, MobileInputOnBlur, MobileInputOnInput, MobileInputTouchStart, MouseEvent, Reset, Resize, TouchEvent, WheelEvent, __socket_incoming_ptr, __socket_on_close, __socket_on_raw_message, __socket_on_raw_open, memory};
