### Research in container
docker exec -it couchbase sh
~ ps -ef --forest

```shell
Single Node
root         1     0  0 01:39 ?        00:00:00 runsvdir -P /etc/service log: ............................................................................................................
root        43     1  0 01:39 ?        00:00:00 runsv couchbase-server
couchba+    44    43  0 01:39 ?        00:00:02  \_ /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/beam.smp -A 16 -sbwt none -- -root /opt/couchbase/lib/erlang -progname erl -- -home /tmp -
couchba+   120    44  0 01:39 ?        00:00:00      \_ erl_child_setup 1048576
couchba+   147   120  3 01:39 ?        00:00:21          \_ /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/beam.smp -A 16 -sbt u -P 327680 -K true -swt low -sbwt none -MMmcs 30 -e102400 -- 
couchba+   169   147  0 01:39 ?        00:00:00          |   \_ erl_child_setup 1048576
couchba+   196   169  0 01:39 ?        00:00:00          |       \_ sh -s disksup
couchba+   197   169  0 01:39 ?        00:00:00          |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/memsup
couchba+   199   169  0 01:39 ?        00:00:00          |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/cpu_sup
couchba+   200   169  1 01:40 ?        00:00:07          |       \_ /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/beam.smp -P 327680 -K true -- -root /opt/couchbase/lib/erlang -progname er
couchba+   207   200  0 01:40 ?        00:00:00          |       |   \_ erl_child_setup 1048576
couchba+   234   207  0 01:40 ?        00:00:00          |       |       \_ sh -s disksup
couchba+   235   207  0 01:40 ?        00:00:00          |       |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/memsup
couchba+   236   207  0 01:40 ?        00:00:00          |       |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/cpu_sup
couchba+   244   207  0 01:40 ?        00:00:00          |       |       \_ inet_gethost 4
couchba+   245   244  0 01:40 ?        00:00:00          |       |       |   \_ inet_gethost 4
couchba+   246   207  0 01:40 ?        00:00:00          |       |       \_ /opt/couchbase/bin/priv/godu
couchba+   252   169  0 01:40 ?        00:00:00          |       \_ sh -s ns_disksup
couchba+   253   169  0 01:40 ?        00:00:00          |       \_ /opt/couchbase/bin/priv/godu
couchba+   259   169  0 01:40 ?        00:00:00          |       \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   265   259  1 01:40 ?        00:00:07          |       |   \_ /opt/couchbase/bin/prometheus --config.file /opt/couchbase/var/lib/couchbase/config/prometheus.yml --web.enable-ad
couchba+   275   169  0 01:40 ?        00:00:00          |       \_ inet_gethost 4
couchba+   277   275  0 01:40 ?        00:00:00          |       |   \_ inet_gethost 4
couchba+   288   169  0 01:40 ?        00:00:00          |       \_ portsigar for ns_1@cb.local 44
couchba+   280   120  0 01:40 ?        00:00:00          \_ /opt/couchbase/bin/saslauthd-port
couchba+   289   120  0 01:40 ?        00:00:00          \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   295   289  1 01:40 ?        00:00:07          |   \_ /opt/couchbase/bin/goxdcr -sourceKVAdminPort=8091 -xdcrRestPort=9998 -isEnterprise=false -ipv4=required -ipv6=optional
couchba+   303   120  0 01:40 ?        00:00:00          \_ /opt/couchbase/bin/memcached -C /opt/couchbase/var/lib/couchbase/config/memcached.json
couchba+    63     1  0 01:39 ?        00:00:00 /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/epmd -daemon
```

```shell
Cluster
root         1     0  0 01:39 ?        00:00:00 runsvdir -P /etc/service log: ............................................................................................................
root        43     1  0 01:39 ?        00:00:00 runsv couchbase-server
couchba+    44    43  0 01:39 ?        00:00:06  \_ /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/beam.smp -A 16 -sbwt none -- -root /opt/couchbase/lib/erlang -progname erl -- -home /tmp -
couchba+   120    44  0 01:39 ?        00:00:00      \_ erl_child_setup 1048576
couchba+   147   120  2 01:39 ?        00:01:05          \_ /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/beam.smp -A 16 -sbt u -P 327680 -K true -swt low -sbwt none -MMmcs 30 -e102400 -- 
couchba+   169   147  0 01:39 ?        00:00:00          |   \_ erl_child_setup 1048576
couchba+   196   169  0 01:39 ?        00:00:00          |       \_ sh -s disksup
couchba+   197   169  0 01:39 ?        00:00:00          |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/memsup
couchba+   199   169  0 01:39 ?        00:00:00          |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/cpu_sup
couchba+   275   169  0 01:40 ?        00:00:00          |       \_ inet_gethost 4
couchba+   277   275  0 01:40 ?        00:00:00          |       |   \_ inet_gethost 4
couchba+   436   169  7 02:19 ?        00:00:04          |       \_ /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/beam.smp -P 327680 -K true -- -root /opt/couchbase/lib/erlang -progname er
couchba+   443   436  0 02:19 ?        00:00:00          |       |   \_ erl_child_setup 1048576
couchba+   470   443  0 02:19 ?        00:00:00          |       |       \_ sh -s disksup
couchba+   471   443  0 02:19 ?        00:00:00          |       |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/memsup
couchba+   472   443  0 02:19 ?        00:00:00          |       |       \_ /opt/couchbase/lib/erlang/lib/os_mon-2.5.1.1/priv/bin/cpu_sup
couchba+   480   443  0 02:19 ?        00:00:00          |       |       \_ inet_gethost 4
couchba+   481   480  0 02:19 ?        00:00:00          |       |       |   \_ inet_gethost 4
couchba+   482   443  0 02:19 ?        00:00:00          |       |       \_ /opt/couchbase/bin/priv/godu
couchba+   488   169  0 02:19 ?        00:00:00          |       \_ sh -s ns_disksup
couchba+   489   169  0 02:19 ?        00:00:00          |       \_ /opt/couchbase/bin/priv/godu
couchba+   496   169  0 02:19 ?        00:00:00          |       \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   502   496  1 02:19 ?        00:00:00          |       |   \_ /opt/couchbase/bin/prometheus --config.file /opt/couchbase/var/lib/couchbase/config/prometheus.yml --web.enable-ad
couchba+   512   169  0 02:19 ?        00:00:00          |       \_ portsigar for ns_1@172.27.0.3 44
couchba+   280   120  0 01:40 ?        00:00:00          \_ /opt/couchbase/bin/saslauthd-port
couchba+   303   120  0 01:40 ?        00:00:03          \_ /opt/couchbase/bin/memcached -C /opt/couchbase/var/lib/couchbase/config/memcached.json
couchba+   517   120  0 02:19 ?        00:00:00          \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   523   517  0 02:19 ?        00:00:00          |   \_ /opt/couchbase/bin/goxdcr -sourceKVAdminPort=8091 -xdcrRestPort=9998 -isEnterprise=false -ipv4=required -ipv6=optional
couchba+   533   120  0 02:19 ?        00:00:00          \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   539   533  2 02:19 ?        00:00:00          |   \_ /opt/couchbase/bin/indexer -adminPort=9100 -scanPort=9101 -httpPort=9102 -streamInitPort=9103 -streamCatchupPort=9104 -str
couchba+   562   120  0 02:19 ?        00:00:00          \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   568   562  0 02:19 ?        00:00:00          |   \_ /opt/couchbase/bin/projector -ipv4=required -ipv6=optional -kvaddrs=127.0.0.1:11210 -adminport=:9999 -diagDir=/opt/couchba
couchba+   583   120  0 02:19 ?        00:00:00          \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   589   583  1 02:19 ?        00:00:00          |   \_ /opt/couchbase/bin/cbq-engine --datastore=http://127.0.0.1:8091 --http=:8093 --configstore=http://127.0.0.1:8091 --enterpr
couchba+   606   120  0 02:19 ?        00:00:00          \_ /opt/couchbase/bin/goport -graceful-shutdown=false -window-size=524288
couchba+   612   606  0 02:19 ?        00:00:00              \_ /opt/couchbase/bin/cbft -cfg=metakv -uuid=ce90c80e705405dd9894380c522e1985 -server=http://127.0.0.1:8091 -dataDir=/opt/cou
couchba+    63     1  0 01:39 ?        00:00:00 /opt/couchbase/lib/erlang/erts-10.7.2.7/bin/epmd -daemon
```
https://docs.couchbase.com/server/current/install/server-processes.html


### examples
#### get order by index and order id
select * from `order` use index (order_id_idx) where `order`.`remark`.`id` = 317430948

